# 📸 PhotoTime

**PhotoTime** is a digital platform for booking photography sessions at local studios.  
Users can browse studios, book appointments, and leave reviews.


## 🚀 Phase One - Completed Features

- ✅ Authentication system using JWT + role-based access control middleware.
- ✅ All essential modules set up.
- ✅ Full CRUD for managing admins.
  - Only the `superAdmin` can add, update, delete, or change the status (active/inactive) of other admins.
- ✅ Full CRUD for the first module: **Studios**.
- ✅ All routes protected and role-restricted.
- ✅ Postman collection prepared for testing.

---


## 🔐 Authentication & Authorization

All routes are protected using JWT-based authentication.  


### 🔸 Admin Routes

| Method | Endpoint                | Description                       | Access       |
|--------|-------------------------|-----------------------------------|--------------|
| POST   | `/addAdmin`             | Add a new admin                   | superAdmin   |
| PATCH  | `/changestatus/:id`     | Toggle admin status (active/inactive) | superAdmin   |
| GET    | `/admins`               | Retrieve all admins               | superAdmin   |
| PUT    | `/admin/:id`            | Update admin info                 | superAdmin   |
| DELETE | `/admin/:id`            | Delete an admin                   | superAdmin   |

---

### 🔸 Studio Routes

| Method | Endpoint       | Description                  | Access      |
|--------|----------------|------------------------------|-------------|
| POST   | `/create`      | Create a new studio          | superAdmin  |
| GET    | `/`            | Get all studios              | Public      |
| GET    | `/:id`         | Get a single studio by ID    | Public      |
| PUT    | `/:id`         | Update studio info           | superAdmin  |
| DELETE | `/:id`         | Delete a studio              | superAdmin  |

---

### 🔸 Booking Routes

| Method | Endpoint                   | Description                            | Access                |
|--------|----------------------------|----------------------------------------|------------------------|
| POST   | `/create`                  | Create a new booking                   | User                   |
| GET    | `/`                        | Get my bookings                        | User                   |
| GET    | `/studio/:studioId`        | Get bookings for a specific studio     | Studio, SuperAdmin     |
| PATCH  | `/:id/status`              | Update the booking status              | Studio, SuperAdmin     |

---

## 📮 Project Delivery

- 🔗 **GitHub Repo**: `https://github.com/RoaaBS/Node_PhotoTime.git`
- 📬 **Postman Collection**: included in the repository as `PhotoTime.postman_collection.json`

---

## 📑 Technologies Used

- Node.js + Express
- MongoDB + Mongoose
- JWT for auth
- Multer (for future file uploads)
- Role-based access control (RBAC)


## ✨ Author

Made with ❤️ by Roaa Baher Sabbarini  
