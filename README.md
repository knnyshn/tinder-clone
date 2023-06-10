# MERN-Project-Tinder-Clone

### Description

This is a basic recreation of the popular dating app Tinder. It utilizes MongoDB, Express, React, and Node.js. The user is able to sign up, sign in, create a profile, and swipe for matches just like the original Tinder.

### Data Model / Code Snippet

```
  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    first_name: "string",
    dob_day: "number",
    dob_month: "number",
    dob_year: "number",
    show_gender: boolean,
    gender_identity: "string",
    gender_interest: "string",
    url: "string",
    about: "string",
    matches: [],
  });
```

### Successes and Blockers

#### Successes

This project I was able to have authentication 100% functioning, and have the MERN stack not crash while doing so.

#### Blockers

Deployment of said project was very difficult and took a lot of time to troubleshoot. Also the authentication method was new to me and implemented differently than the way that I learned it (using models and routes).

### Future Goals

To clean up / expand the UI all around, update the authentication and routes, add error pages, signout pages/routes.

### Credit and References

YouTube Tutorial by Ania Kubow, React-Tinder-Card by 3DJakob
