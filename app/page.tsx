// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <div className=''>
          <h1 className="text-3xl md:text-5xl font-semibold text-center py-1 bg-radialGreen bg-clip-text text-transparent">
            Convierte archivos multimedia
          </h1>
          <h1 className="text-3xl md:text-5xl font-semibold text-center  py-1 bg-linearLila bg-clip-text text-transparent">
          ilimitados y gratis
          </h1>
        </div>
        <p className="text-gray-300 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Usa <strong className='text-white w-max underline underline-offset-2 decoration-lila'>Joaverter</strong>, la mejor herramienta en línea para
          la conversión ilimitada y gratuita de archivos multimedia. Convierte imágenes, audio y videos sin esfuerzo, sin restricciones. ¡Comienza a convertir ahora y lleva tu contenido a otro nivel!
        </p>
      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}
