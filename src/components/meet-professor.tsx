import React from "react";

const MeetProfessor = () => {
  return (
    <div className="mx-8">
      <div className="max-w-[1600px] mx-auto my-8 bg-[#FAF5E2] text-black">
        <div className="lg:grid lg:grid-cols-3 flex flex-col-reverse">
          <div className="flex flex-col justify-between gap-y-12 col-span-1 p-3">
            <h3 className="text-4xl">Meet your professor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis voluptates ipsa rem optio consequatur possimus
              provident vitae commodi amet obcaecati quidem perferendis cum
              omnis neque nemo, explicabo error sequi. Doloremque placeat
              similique magni veritatis error?
            </p>
          </div>
          <div className="lg:col-span-2">
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
