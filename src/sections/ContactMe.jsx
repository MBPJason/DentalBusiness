function ContactMe() {
  return (
    <section id='contact-me'>
      <h2>Contact Us</h2>
      <p>
        Ready to schedule an appointment or have questions? Reach out below!
      </p>
      <form>
        <label>
          Name:
          <input type='text' name='name' required />
        </label>
        <label>
          Email:
          <input type='email' name='email' required />
        </label>
        <label>
          Message:
          <textarea name='message' required />
        </label>
        <button type='submit'>Send Message</button>
      </form>
    </section>
  );
}

export default ContactMe;
