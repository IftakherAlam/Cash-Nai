'use client';
import CountUp from 'react-countup'

const convertToBanglaNumbers = (num: number) => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num
      .toString()
      .split('')
      .map((digit) => (/\d/.test(digit) ? banglaDigits[Number(digit)] : digit))
      .join('');
  };
const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
      <div className="w-full">
          ৳<CountUp
             
              decimals={2}
              decimal=","
              prefix="\u09F3"
              end={amount}
              formattingFn={(value) => convertToBanglaNumbers(value)}
          />
          </div>
  )
}

export default AnimatedCounter