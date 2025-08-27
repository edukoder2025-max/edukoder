const fs = require('fs').promises;
const path = require('path');

// Gemini API integration
async function callGeminiAPI(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is required');
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
}

// Tutorial generation prompts
const tutorialTopics = [
  'JavaScript Array Methods',
  'CSS Flexbox Alignment',
  'TypeScript Interfaces',
  'React useEffect Hook',
  'PHP Object-Oriented Programming',
  'HTML Semantic Elements',
  'Git Branching Strategies',
  'API Error Handling',
  'Database Indexing',
  'Performance Optimization'
];

async function generateTutorial(topic) {
  const prompt = `
    Genera un microtutorial de programación sobre "${topic}" con el siguiente formato JSON:
    {
      "title": "Título claro y específico",
      "description": "Descripción breve (máximo 100 caracteres)",
      "duration": "X min",
      "level": "Principiante|Intermedio|Avanzado",
      "category": "JavaScript|TypeScript|React|PHP|CSS|HTML",
      "content": {
        "introduction": "Introducción breve",
        "explanation": "Explicación del concepto",
        "codeExample": "Ejemplo de código con comentarios",
        "keyPoints": ["Punto clave 1", "Punto clave 2", "Punto clave 3"],
        "practiceExercise": "Ejercicio práctico para el lector"
      },
      "tags": ["tag1", "tag2", "tag3"]
    }
    
    Requisitos:
    - El tutorial debe ser conciso (lectura de 3-8 minutos)
    - Incluir ejemplo de código funcional
    - Explicación clara y práctica
    - Ejercicio para practicar
    - Solo devuelve el JSON válido, sin texto adicional
  `;

  try {
    const response = await callGeminiAPI(prompt);
    // Clean the response to ensure it's valid JSON
    const cleanedResponse = response.replace(/```json\n?|\n?```/g, '').trim();
    return JSON.parse(cleanedResponse);
  } catch (error) {
    console.error(`Error generating tutorial for topic "${topic}":`, error);
    return null;
  }
}

async function main() {
  console.log('🤖 Starting tutorial generation with Gemini AI...');
  
  const tutorials = [];
  
  // Generate tutorials for random topics
  const selectedTopics = tutorialTopics
    .sort(() => 0.5 - Math.random())
    .slice(0, 3); // Generate 3 new tutorials per run

  for (const topic of selectedTopics) {
    console.log(`Generating tutorial for: ${topic}`);
    const tutorial = await generateTutorial(topic);
    
    if (tutorial) {
      tutorials.push(tutorial);
      console.log(`✅ Generated: ${tutorial.title}`);
    } else {
      console.log(`❌ Failed to generate tutorial for: ${topic}`);
    }
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  // Save tutorials to data file
  const dataPath = path.join(__dirname, '../data/generated-tutorials.json');
  
  try {
    // Ensure data directory exists
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    
    let existingTutorials = [];
    try {
      const existingData = await fs.readFile(dataPath, 'utf8');
      existingTutorials = JSON.parse(existingData);
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }

    // Merge new tutorials with existing ones
    const allTutorials = [...existingTutorials, ...tutorials];
    
    await fs.writeFile(dataPath, JSON.stringify(allTutorials, null, 2));
    console.log(`💾 Saved ${tutorials.length} new tutorials to ${dataPath}`);
    console.log(`📊 Total tutorials: ${allTutorials.length}`);
    
  } catch (error) {
    console.error('Error saving tutorials:', error);
  }

  console.log('🎉 Tutorial generation complete!');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generateTutorial, callGeminiAPI };
