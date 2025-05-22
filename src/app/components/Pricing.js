import Image from 'next/image';

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">
        <div className="inner-container slider">
          {/* This grid will be a sub-component or part of a more complex layout later */}
          <div className="w-layout-grid grid-3">
            <div className="div-block-17">
              <div className="div-block-14">
                <div className="text-block-2">&quot;Designjoy shows that they know the art of subtlety.&quot;<br /></div>
                <Image loading="lazy" src="/65dd4dae1c85fee7c339650a_Webflow_logo_2023 (1) 1.svg" alt="" width={100} height={30} className="image-12" />
              </div>
            </div>
            <div className="div-block-17">
              <div className="div-block-14">
                <div className="text-block-2">&quot;Design is everything, and these guys have nailed it.&quot;<br /></div>
                <div className="div-block-15">
                  <Image loading="lazy" src="/Group 1171274555.png" alt="" width={70} height={70} className="image-13" />
                  <div className="div-block-16">
                    <div className="text-block-3">Kevin O&#x27;Leary</div>
                    <div>Shark Tank</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  );
};

export default Pricing; 