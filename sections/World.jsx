'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
    </motion.div>
    <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className="relative mt-[68px] flex w-full h-[550px]"
    >
      <img src="/map.png" alt="map" className="w-full h-full object-cover" />

      <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
        <img src="/people-01.png" alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
        <img src="/people-02.png" alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
        <img src="/people-03.png" alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-[5%]  p-[6px] rounded-[25px] bg-[#5d6680]">
        <img src="/card01.png" alt="people" className="w-[full] h-full" />

        <img
          src="people-03.png"
          alt="people"
          className="absolute w-[30px] h-[30px] top-14 left-11"
        />
        <img
          src="people-02.png"
          alt="people"
          className="absolute w-[30px] h-[30px] top-14 left-8"
        />
        <img
          src="people-01.png"
          alt="people"
          className="absolute w-[30px] h-[30px] top-14 left-5"
        />
        <p className="absolute left-10 bottom-5 font-bold text-[px] text-white">
          Hawkins Labs
        </p>
        <p className="absolute top-16 left-20 text-[12px] text-white">
          + 264 has joined
        </p>
      </div>
      <div className="absolute bottom-20 left-[1%] p-[6px] rounded-[25px] bg-[#5d6680] ">
        <img src="/card02.png" alt="people" className="w-full h-full" />
        <img
          src="people-03.png"
          alt="people"
          className="absolute w-[30px] h-[30px] top-14 left-11"
        />
        <img
          src="people-02.png"
          alt="people"
          className="absolute w-[30px] h-[30px] top-14 left-8"
        />
        <img
          src="people-01.png"
          alt="people"
          className="absolute w-[30px] h-[30px] top-14 left-5"
        />
        <p className="absolute left-10 bottom-5 font-bold text-[px] text-white">
          The Upside Down
        </p>
        <p className="absolute top-16 left-20 text-[12px] text-white">
          + 264 has joined
        </p>
      </div>
    </motion.div>
  </section>
);

export default World;
