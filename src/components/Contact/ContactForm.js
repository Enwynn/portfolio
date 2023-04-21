import { useForm, ValidationError } from '@formspree/react';
import '../../index.css';

function ContactForm() {
  const [state, handleSubmit] = useForm('xbjqpora');
  if (state.succeeded) {
    return (
      <h2 className="text-center text-white text-2xl">
        Your e-mail is sent! I will get back to you as soon as possible! 😄
      </h2>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-y-5 sm:w-1/2 grid-cols-1 sm:m-auto"
    >
      {/* <label htmlFor="email">Email Address</label> */}
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email Address"
        className="rounded px-2 py-1 text-black shadow-inner"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="Message..."
        className="rounded px-2 py-1 text-black shadow-inner"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="btn m-auto "
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
