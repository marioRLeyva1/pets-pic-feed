import React from 'react';

export const About = () => {
  return (
    <div>
      <ul>
        <li>Create a context to reuse the Modal, in the context must be included title, msg, type (warn, error, success)</li>
        <li>Add a broken heart when a favorited is removed</li>
        <li>Create Not Found page</li>
      </ul>

      <h2>Release Notes</h2>
      <section>
        <h5>v1.0.2</h5>
        <ul>
          <li>Heart added when you add to favorites some image.</li>
          <li>Bug fixes</li>
        </ul>
      </section>
      <section>
        <h5>v1.0.3</h5>
        <ul>
          <li>API results from a random page in range 1-100</li>
        </ul>
      </section>
    </div>
  );
};
