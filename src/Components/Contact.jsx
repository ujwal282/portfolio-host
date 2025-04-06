import Button from './Button'
const Contact = () => {
  return (
    <section
      className="flex flex-col items-center pt-18 xl:pt-28 px-4 h-dvh w-full"
      id="contact"
    >
      <div className="w-full max-w-4xl text-center mb-10">
        <h1 className="font-body font-bold text-3xl mb-4">Lets Design Together</h1>
        <p className="font-header text-lg">
        Have an idea or project in mind? Let’s build something awesome together! I specialize in clean, responsive MERN stack websites that are fast, functional, and user-focused. Drop me a message—I'm just a click away!
        </p>
      </div>
      <div>
      <form className="flex flex-col w-xs xl:w-96   gap-4" action="#">
  <input
    className=" p-2 xl:p-5 rounded-md outline-1 outline-gray-500  focus-within:outline-2 focus-within:outline-gray-400 "
    type="text"
    name="username"
    placeholder="Enter your name here"
  />
  <input
    className="p-2 xl:p-5 rounded-md outline-1 outline-gray-500  focus-within:outline-2 focus-within:outline-gray-400 "
    type="email"
    name="email"
    placeholder="Enter your email here"
  />
  <textarea
    className="resize-none  p-2 xl:p-5 rounded-md outline-1 outline-gray-500  focus-within:outline-2 focus-within:outline-gray-400 "
    name="message"
    rows={3}
    placeholder="Write your message..."
  />
  <Button label={"Contact Me"} />
</form>

      </div>
    </section>
  )
}

export default Contact;