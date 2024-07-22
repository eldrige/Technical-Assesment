'use client';
import Image, { StaticImageData } from 'next/image';
import StarIcon from './atoms/star';
import { CasinoCard } from '../types/casino';

const Small = (props: CasinoCard) => {
  return (
    <div
      role="region"
      className="shadow-[0_0_20px_0_#0000001A] w-full max-w-[300px] bg-white flex tablet-min:hidden flex-col gap-4 items-center justify-center rounded p-4"
    >
      <div
        role="banner"
        className="w-full flex items-center justify-center  h-32"
        style={{ backgroundColor: props.bgColor }}
      >
        <Image
          src={props.logo}
          alt={`${props.name}-logo`}
          width={100}
          height={24}
          priority
        />
      </div>
      <h2 className="text-black underline text-[20px]">{props.name}</h2>
      <div className="flex gap-2">
        {Array.from({ length: props.starsCount }).map((_, index) => (
          <StarIcon key={index} />
        ))}
      </div>
      <p className="text-black font-semibold text-[20px]">Bonus</p>
      <div className="text-[28px] mobile-max:flex mobile-max:gap-2 text-black text-center font-normal -mt-3">
        <p>
          Bet {props.currencySymbol} {props.betAmount}
        </p>
        <p>
          Get {props.currencySymbol} {props.earnAmount}
        </p>
      </div>
      <button
        role="button"
        aria-label="Click me"
        aria-describedby="card-description"
        className="capitalize w-full text-[20px] font-bold text-white rounded-[10px] p-5 bg-[#009129]"
      >
        bet now
      </button>
    </div>
  );
};

const Desktop = (props: CasinoCard) => {
  return (
    <div className="hidden w-full max-w-[900px] desktop-min:max-w-[1200px] shadow-[0_0_20px_0_#0000001A] bg-white desktop-min:flex gap-8 items-center justify-center rounded p-4 pr-[70px]">
      <div
        className="w-full flex items-center justify-center  h-32"
        style={{ backgroundColor: props.bgColor }}
      >
        <Image
          src={props.logo}
          alt={`${props.name}-logo`}
          width={100}
          height={24}
          priority
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-black underline text-[20px]">{props.name}</h2>
        <div className="flex gap-2">
          {Array.from({ length: props.starsCount }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col gap-1">
        <p className="text-black font-semibold text-center text-[20px]">
          Bonus
        </p>
        <div className="text-[28px] w-full  text-black text-center font-normal">
          <p>
            Bet {props.currencySymbol}
            {props.betAmount}
          </p>
          <p>
            Get {props.currencySymbol}
            {props.earnAmount}
          </p>
        </div>
      </div>
      <button
        role="button"
        aria-label="Click me"
        aria-describedby="card-description"
        className="max-w-[306px] desktop-min:max-w-[190px] capitalize w-full text-[20px] font-bold text-white rounded-[10px] p-5 bg-[#009129]"
      >
        bet now
      </button>
    </div>
  );
};

const Tablet = (props: CasinoCard) => {
  return (
    <div className="hidden w-full max-w-[684px] tablet-min:flex desktop-min:hidden  shadow-[0_0_20px_0_#0000001A] bg-white  flex-col gap-8 items-center justify-center rounded p-4">
      <div className="w-full flex gap-12">
        <div
          style={{ backgroundColor: props.bgColor }}
          className="w-full py-[14px] px-[78px] flex items-center justify-center"
        >
          <Image
            src={props.logo}
            alt={`${props.name}-logo`}
            width={120}
            height={120}
            priority
          />
        </div>
        <div className="flex w-full flex-col justify-between">
          <div>
            <h2 className="text-black underline text-[20px]">{props.name}</h2>
            <div className="flex gap-2">
              {Array.from({ length: props.starsCount }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-black font-semibold text-[20px]">Bonus</p>
            <div className="text-[28px] w-full flex flex-row gap-2 text-black font-normal">
              <p>
                Bet {props.currencySymbol}
                {props.betAmount}
              </p>
              <p>
                Get {props.currencySymbol}
                {props.earnAmount}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        role="button"
        aria-label="Click me"
        aria-describedby="card-description"
        className="capitalize w-full text-[20px] font-bold text-white rounded-[10px] p-5 bg-[#009129]"
      >
        bet now
      </button>
    </div>
  );
};

export const Card = (props: CasinoCard) => {
  return (
    <>
      <Small {...props} />
      <Tablet {...props} />
      <Desktop {...props} />
    </>
  );
};
