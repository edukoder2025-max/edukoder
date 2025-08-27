export default function Stats() {
  const stats = [
    { label: 'Microtutoriales Disponibles', value: '500+' },
    { label: 'Estudiantes Activos', value: '15,000+' },
    { label: 'Lenguajes Cubiertos', value: '12+' },
    { label: 'Empleos Conseguidos', value: '2,500+' },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
