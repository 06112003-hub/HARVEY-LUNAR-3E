# RESTful API Activity - Harvey Lunar

## Best Practices Implementation

---

**1. Environment Variables:**

- Why did we put `BASE_URI` in `.env` instead of hardcoding it?  
- **Answer:** I put `BASE_URI` in the `.env` file to make the application more flexible and secure. This allows us to change the base path or API version without modifying the source code. It also follows best practices by separating configuration from application logic.

---

**2. Resource Modeling:**

- Why did we use plural nouns (e.g., `/dishes`) for our routes?  
- **Answer:** I used plural nouns because each route represents a collection of resources. For example, `/dishes` refers to multiple dish records, not just one. This follows RESTful conventions and makes the API more intuitive and scalable.

---

**3. Status Codes:**

- When do we use `201 Created` vs `200 OK`?  
  - `201 Created` is used when a new resource is successfully created (typically in a POST request).  
  - `200 OK` is used when a request is successful but does not create a new resource, such as GET or PUT requests.

- Why is it important to return `404` instead of just an empty array or a generic error?  
- **Answer:** Returning `404 Not Found` clearly tells the client that the requested resource does not exist. It improves error clarity, helps with debugging, and allows proper handling on the client side.

---

**4. Testing:**

- (Paste a screenshot of a successful GET request here)
<img width="1624" height="850" alt="Screenshot 2026-01-29 020217" src="https://github.com/user-attachments/assets/19724dfb-9cad-4441-adfa-d553b493dd9b" />
