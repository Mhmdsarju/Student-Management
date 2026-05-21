import express from "express";
import studentRoutes from "./modules/student/routes/student.routes";
import teacherRoutes from "./modules/teacher/routes/teacher.routes";
import courseRoutes from "./modules/course/routes/course.routes";
import enrollmentRoutes from "./modules/enrollment/routes/enrollment.routes";
import markRoutes from "./modules/mark/routes/mark.routes";

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);
app.use("/courses", courseRoutes);
app.use("/enrollments", enrollmentRoutes);
app.use("/marks", markRoutes);

export default app;