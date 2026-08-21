## Contact Form

https://roadmap.sh/projects/contact-form

Overview: 

In this project, I build a single HTML page containing a contact form.

Key requirements implemented in this project:

- **A** `<form>` element with `action` set to placeholder URL and `method="post"`
- **Real labels** for every input, paired by `for` and `id`.
- **Created the following fields:**
    - Full name (`type="text"`, required).
    - Email (`type="email"`, required).
    - Subject (`<select>` with four `<option>`).
    - Message (`<textarea>`, required, with a `minlength`).
    - A "How did you hear about us?" grouping using `<input type="radio">` inputs grouped inside a `<fieldset>` with a `<legend>`.
    - An optional newsletter `<input type="checkbox">`.
- **A submit button** with `type="submit"` and clear text "Send message".
- **Browser validiation attributes** where appropriate (e.g. `required`, `minlegth`, `type="email"`).
- **Head metadata**: Set `<title>`, `<meta charset>`, `<meta viewport>`.