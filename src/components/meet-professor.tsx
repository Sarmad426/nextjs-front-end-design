import React from "react";

const MeetProfessor = () => {
  return (
    <div className="mx-auto md:w-[95%]">
      <div className="mx-auto my-8 bg-[#FAF5E2] text-black">
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="flex-1 flex flex-col justify-between gap-y-12 p-3">
            <h3 className="text-4xl">Meet your professor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis voluptates ipsa rem optio consequatur possimus
              provident vitae commodi amet obcaecati quidem perferendis cum
              omnis neque nemo, explicabo error sequi. Doloremque placeat
              similique magni veritatis error?
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/j7W44OPRVgM?si=7IYWk19Msgm3DLHB"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetProfessor;
