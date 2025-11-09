# React Router v6 Learning Guide

A minimalistic project to learn React Router concepts step by step.

---

## 📚 Core Concepts

### 1. Simple Routing

Basic navigation between pages. Each route corresponds to a different component.

**What is it?**

- Routes map URLs to components
- Navigation between different pages
- Each URL path shows different content

**How it works:**

```jsx
// In App.jsx
<Route path="/" element={<Home />} />
<Route path="/contact" element={<Contact />} />

// Users click on links to navigate
<Link to="/">Home</Link>
<Link to="/contact">Contact</Link>
```

**Example:**

- `/` → Shows Home component
- `/contact` → Shows Contact component

**Location:** `src/components/simpleRouting/`

---

### 2. Nested Routing

Routes inside other routes. Useful for layouts where some components stay the same.

**What is it?**

- Parent route with child routes
- Child routes inherit parent path
- Uses `<Outlet />` to render child components
- Shared layout between related pages

**How it works:**

```jsx
// In App.jsx
<Route path="/about" element={<About />}>
  <Route path="team" element={<Team />} />
  <Route path="history" element={<History />} />
</Route>;

// In About.jsx
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <nav>
        <Link to="/about/team">Team</Link>
        <Link to="/about/history">History</Link>
      </nav>

      {/* Outlet renders child components here */}
      <Outlet />
    </div>
  );
}
```

**Example:**

- `/about` → Shows About component with Outlet empty
- `/about/team` → Shows About component + Team in Outlet
- `/about/history` → Shows About component + History in Outlet

**Key Concept: `<Outlet />`**

- Placeholder for child components
- Rendered by parent route
- Allows shared layout with changing content

**Location:** `src/components/nestedRouting/`

---

### 3. Dynamic Routing

Routes with parameters that change based on URL.

**What is it?**

- URL parameters like `:userId`
- Different content based on parameter
- Extract parameters using `useParams()`
- Common for lists → detail pages

**How it works:**

```jsx
// In App.jsx
<Route path="/users" element={<UserList />} />
<Route path="/users/:userId" element={<UserProfile />} />

// In UserList.jsx - create links with parameters
<Link to={`/users/${user.id}`}>View Profile</Link>

// In UserProfile.jsx - extract parameter
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  // userId will be "1", "2", "3", etc based on URL
  return <h1>User {userId}</h1>;
}
```

**Example:**

- `/users` → Shows list of users
- `/users/1` → Shows profile for user 1
- `/users/2` → Shows profile for user 2
- `/users/john-doe` → Shows profile for john-doe

**Key Hook: `useParams()`**

- Extracts URL parameters
- Returns object with parameter values
- Dynamic routing depends on this hook

**Location:** `src/components/dynamicRouting/`

---

## 🔀 Link vs useNavigate

### Link Component

**Used for:** Regular navigation, like `<a>` tag

```jsx
import { Link } from "react-router-dom";

function MyComponent() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
```

**Characteristics:**

- Declarative (describe what should happen)
- Pre-rendered as HTML
- Similar to HTML `<a>` tag
- Best for normal navigation

### useNavigate Hook

**Used for:** Programmatic navigation (navigation in code, not UI)

```jsx
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  function handleClick() {
    // Do something...
    navigate("/"); // Then navigate
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

**Characteristics:**

- Imperative (tell how to navigate)
- Used in event handlers, callbacks
- Can navigate after some action completes
- Best for conditional or delayed navigation

### Comparison Table

| Feature         | Link            | useNavigate                         |
| --------------- | --------------- | ----------------------------------- |
| Usage           | Declarative     | Imperative                          |
| Trigger         | User clicks     | Code execution                      |
| Use Case        | Normal links    | After form submit, API call, etc    |
| Replace History | `.replace` prop | `navigate(path, { replace: true })` |
| Go Back         | Can't do this   | `navigate(-1)` (like browser back)  |

**Example showing difference:**

```jsx
import { Link, useNavigate } from "react-router-dom";

function Example() {
  const navigate = useNavigate();

  // LINK - Simple navigation
  <Link to="/home">Home</Link>;

  // USENVIGATE - Navigation after action
  async function handleSubmit(data) {
    const result = await api.save(data);
    if (result.success) {
      navigate("/success");
    }
  }
}
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── simpleRouting/
│   │   ├── Home.jsx          (Simple Route Example)
│   │   └── Contact.jsx       (Simple Route Example)
│   │
│   ├── nestedRouting/
│   │   ├── About.jsx         (Parent with <Outlet />)
│   │   ├── Team.jsx          (Nested Route)
│   │   └── History.jsx       (Nested Route)
│   │
│   ├── dynamicRouting/
│   │   ├── UserList.jsx      (Lists with dynamic links)
│   │   └── UserProfile.jsx   (Uses useParams)
│   │
│   └── NotFound.jsx          (404 page)
│
└── App.jsx                   (Route setup)
```

---

## 🚀 How to Use This Project

### 1. Simple Routing

- Click "Home" or "Contact" in navigation
- Notice URL changes to `/` or `/contact`
- Different component renders based on URL

### 2. Nested Routing

- Click "About" in navigation
- See About component rendered
- Click "Team" or "History" inside About
- Notice URL is `/about/team` or `/about/history`
- Outlet shows different content while About stays same

### 3. Dynamic Routing

- Click "Users" in navigation
- See list of users
- Click any user
- Notice URL shows `/users/1`, `/users/2`, etc
- Component uses `useParams()` to get user ID
- Shows different content for each user

### 4. Link vs useNavigate

- "Go back home" button uses `Link`
- Form submissions use `useNavigate`
- Check differences in your browser

---

## 📝 Key Takeaways

1. **Simple Routing**

   - Basic URL → Component mapping
   - Use `<Route>` and `<Link>`

2. **Nested Routing**

   - Child routes inherit parent path
   - Use `<Outlet />` in parent
   - Share layout between related pages

3. **Dynamic Routing**

   - URL parameters like `:userId`
   - Extract with `useParams()`
   - Show different content based on parameter

4. **Navigation**
   - `Link` → Declarative, for normal navigation
   - `useNavigate` → Imperative, for programmatic navigation

---

## 🔗 React Router Documentation

- [React Router Docs](https://reactrouter.com/)
- [Route](https://reactrouter.com/en/main/route/route)
- [Link](https://reactrouter.com/en/main/components/link)
- [Outlet](https://reactrouter.com/en/main/components/outlet)
- [useParams](https://reactrouter.com/en/main/hooks/use-params)
- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)

---

## 📚 Learning Path

1. Start with **Simple Routing** - understand basic navigation
2. Move to **Nested Routing** - learn about layouts and Outlet
3. Explore **Dynamic Routing** - work with URL parameters
4. Compare **Link vs useNavigate** - understand when to use each
5. Build your own routes - apply all concepts
