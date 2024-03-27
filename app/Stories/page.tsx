import React from 'react';
import Stories from './Stories.json'; 
import Image from 'next/image';

function StoriesPage() {
  return (
    <div className="bg-blue-900 text-white px-4 py-8">
      <header className="max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-center tracking-wide">Welcome to The Blessed Only Stories</h1>
            <p className="text-xl leading-relaxed text-center mt-4">
                Dive into these stories and discover what ignites your own champion spirit.
            </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Stories.map((story, index) => (
          <div key={story.name || index} className="story-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg">
            <h3 className="text-2xl font-semibold my-2 text-black text-center">{story.name}</h3>
            <h5 className='text-black text-center px-4 text-sm'>{story.sport}</h5>
            <Image
              src={story.image} // Replace with actual image path
              alt={story.name}
              layout="container"
              width={200}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black mb-2">Achievement : {story.achievement}</p>
              <p className="text-black mb-2">Challenge : {story.challenge}</p>|
              <p className='text-black mb-2'>Quote : {story.quote}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default StoriesPage;
