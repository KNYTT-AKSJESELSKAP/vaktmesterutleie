'use client'
import { Button } from '@/components/ui/button'
import { MotionConfig, motion, type Variants } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate flex min-h-[600px] items-end overflow-hidden bg-white md:min-h-[660px] md:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-20 md:left-[35%] md:[mask-image:linear-gradient(to_right,transparent,black_35%)]"
        >
          <Image
            src="/sivert.jpg"
            alt="Sivert Sørås frå Vaktmesterutleie"
            fill
            priority
            sizes="(min-width: 768px) 65vw, 100vw"
            className="object-cover object-[center_6%]"
          />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-white from-35% via-white/70 to-transparent md:hidden"
        />

        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
          <motion.div
            className="flex max-w-lg flex-col gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={item} className="link-brand uppercase">
              Vaktmesterutleie
            </motion.span>
            <motion.h1
              variants={item}
              className="hero-title text-balance md:text-5xl md:leading-tight"
            >
              Handverk du kan stole på.
            </motion.h1>
            <motion.p variants={item} className="hero-subtitle max-w-md">
              Vaktmeistertenester og utstyrsutleige.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild className="px-4">
                <Link href="/kontakt">Få eit gratis tilbod</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/80 px-4 backdrop-blur-sm"
              >
                <Link href="/utleige">Sjå utleigekatalog</Link>
              </Button>
            </motion.div>

            <motion.p variants={item} className="text-sm text-gray-500">
              Raskt og uforpliktande tilbod.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  )
}
