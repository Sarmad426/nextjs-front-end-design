import React from "react";

const MeetProfessor = () => {
  return (
    <div className="w-screen mx-7 my-8">
      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-between gap-y-12 col-span-1">
          <h3 className="text-4xl">Meet your professor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            voluptates ipsa rem optio consequatur possimus provident vitae
            commodi amet obcaecati quidem perferendis cum omnis neque nemo,
            explicabo error sequi. Doloremque placeat similique magni veritatis
            error?
          </p>
        </div>
        <div className="col-span-2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/j7W44OPRVgM?si=7IYWk19Msgm3DLHB"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MeetProfessor;
