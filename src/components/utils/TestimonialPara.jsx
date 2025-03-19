import React from 'react'
import Detail from './Detail'
import Heading from './Heading';

const TestimonialPara = () => {
  return (
    <>
      <div className="pb-6">
        <Detail className="text-gray-800 text-lg text-center font-medium leading-[133%]">
          “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
          felis turpis, nec semper odio <br /> convallis at. Curabitur imperdiet
          semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.{" "}
          <br /> Maecenas est purus, eleifend ac cursus sed, tincidunt ut
          sapien. <br /> Morbi ornare elit at libero suscipit porta.”
        </Detail>
      </div>
      <div>
        <Heading className="!text-lg font-medium leading-[144%] text-center pb-2">
          Esther Howard
        </Heading>
        <Detail className="!text-[16px] text-center !font-light !leading-[150%]">Managing Director, ABC company</Detail>
      </div>
    </>
  );
}

export default TestimonialPara
