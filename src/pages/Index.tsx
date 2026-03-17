import { Navbar } from "@/components/Navbar"
import { Hero7 } from "@/components/Hero7"

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="lg:mx-12">
          <Hero7
            heading="Исследования, меняющие медицину будущего"
            description="Мы изучаем механизмы заболеваний на молекулярном уровне, разрабатываем новые методы диагностики и лечения. Наша работа открывает путь к персонализированной медицине и улучшению качества жизни пациентов."
            button={{
              text: "Узнать о проекте",
              url: "#",
            }}
            reviews={{
              count: 120,
              rating: 4.9,
              avatars: [
                {
                  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
                  alt: "Исследователь 1",
                },
                {
                  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
                  alt: "Исследователь 2",
                },
                {
                  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
                  alt: "Исследователь 3",
                },
                {
                  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
                  alt: "Исследователь 4",
                },
                {
                  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
                  alt: "Исследователь 5",
                },
              ],
            }}
          />
        </main>
      </div>
    </div>
  )
}

export default Index