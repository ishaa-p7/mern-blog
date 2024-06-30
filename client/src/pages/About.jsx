export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Isha's Blog  <span class="text-red-600 text-4xl inline-block relative top-1">&hearts;</span>
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Isha's Blog! This blog was created by Isha Patel
              as a personal project to share her thoughts and ideas with the
              world. Isha is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
            On this blog, you'll find weekly articles and tips on a variety of interesting topics. Whether you're looking for practical advice, inspiring stories, or just something new to learn, we've got something for everyone. Isha is always learning and exploring new
              things, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}