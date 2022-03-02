function About() {
  return (
    <>
      <h1 className='text-6xl mb-4 text-center text-secondary'>Github Finder</h1>
      <p className='mb-4 text-2xl text-center text-neutral-content'>
        A React app to search GitHub profiles and see profile details. This
        project uses Daisy UI, Tailwind, and React.
      </p>
      <p className='text-lg text-center text-neutral-content'>
        Version <span className='text-white'>1.0.1</span>
      </p>
      <p className='text-lg mb-40 text-center text-neutral-content'>
        Created By: {' '}
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Justin Hill
        </a>
      </p>
    </>
  )
}

export default About