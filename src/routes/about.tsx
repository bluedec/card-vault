import { A } from "@solidjs/router";

export default function About() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4 max-w-3xl">
      <h1 class="text-5xl text-sky-700 font-thin uppercase my-8">
        Bitácora del Proyecto
      </h1>

      {/* --- CONTEXTO DEL PROYECTO --- */}
      <section class="text-left mt-10 space-y-6">

        <div>
          <h2 class="text-2xl font-semibold">🧠 Origen del proyecto</h2>
          <p>
            Este proyecto nació como una exploración práctica de desarrollo full-stack
            usando <strong>SolidStart</strong>, con el objetivo de entender cómo se
            construye y despliega una aplicación moderna desde cero.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold">🤖 Uso de IA en el proceso</h2>
          <p>
            Durante el desarrollo se utilizó asistencia de IA (incluyendo ChatGPT)
            para resolver dudas técnicas, entender patrones de arquitectura, configurar
            herramientas como Vite, Tailwind y SolidStart, y optimizar el flujo de desarrollo.
          </p>
          <p>
            La IA no reemplaza el aprendizaje, sino que actúa como un acelerador
            para entender conceptos más rápido y evitar bloqueos técnicos.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold">🚀 Deployment en Vercel</h2>
          <p>
            La aplicación fue preparada para producción usando SolidStart, y desplegada
            en <strong>Vercel</strong>, aprovechando su integración con frameworks modernos
            de frontend y su pipeline automático de CI/CD.
          </p>
          <p>
            Esto permite que cada cambio en el repositorio se despliegue automáticamente,
            facilitando iteración rápida del proyecto.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold">🃏 Sistema de Cartas (núcleo del proyecto)</h2>
          <p>
            El objetivo del sistema es representar entidades llamadas <strong>Cartas</strong>,
            cada una con identidad y atributos propios.
          </p>

          <ul class="list-disc ml-6 mt-2 space-y-1">
            <li><strong>id:</strong> identificador único global</li>
            <li><strong>nombre:</strong> nombre de la carta</li>
            <li><strong>rareza:</strong> nivel de rareza (común, rara, épica, legendaria...)</li>
            <li><strong>valor:</strong> valor definido por el usuario o sistema</li>
            <li><strong>metadata:</strong> espacio extensible para futuras mecánicas</li>
          </ul>

          <p class="mt-4">
            Este sistema está pensado como base para expansión futura:
            trading, colecciones, economía interna o incluso mecánicas de juego.
          </p>
        </div>

      </section>

      {/* --- NAVEGACIÓN --- */}
      <p class="mt-12">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>About Page</span>
      </p>
    </main>
  );
}
