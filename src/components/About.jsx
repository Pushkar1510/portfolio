import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Much of my love for programming was ignited by cinema: I still remember the iconic cascading code scene in The Matrix, even if I didn’t understand much on my first watch. Like thousands of other kids all over the world, I was swept away by the superhero craze. At first, all I wanted was a mechatronic suit identical to Tony Stark's, but every rewatch revealed a new layer: soon enough, my attention was grabbed by Jarvis, one of Stark's AI creations.
        </p>

        <br />

        <p className="text-xl">
        I started researching concepts like artificial intelligence and machine learning and was amazed by the sheer potential of computing as a whole. What struck me the most was that developments in computer science help not just fictional superheroes and billionaires but also ordinary people around me. I felt like my calling was to improve the lives of everyone through my work, and this is what drove me to pursue computer science as a career.  
        </p>
      </div>
    </div>
  );
};

export default About;
