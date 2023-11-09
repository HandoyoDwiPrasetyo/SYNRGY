import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;

    next();
  };

app.use(middleware({ name: "Handoyo DP" }));

routes(app);

// request response generics
// const middleware =
//   ({ name }: { name: string }) =>
//   (req: Request, res: Response, next: NextFunction) => {
//     res.locals.name = name;

//     next();
//   };

// app.use(middleware({ name: "Handoyo DP" }));

// app.get(
//   "/api/books/:bookId/:authorId",
//   (
//     req: Request<
//       { bookId: "string"; authorId: string },
//       {},
//       { name: string },
//       {}
//     >,
//     res: Response,
//     next: NextFunction
//   ) => {
//     // req.params.authorId
//     // req.body.name
//     console.log(res.locals.name);

//     res.send(res.locals.name);
//   }
// );

// middleware
// const middleware =
//   ({ name }: { name: string }) =>
//   (req: Request, res: Response, next: NextFunction) => {
//     res.locals.name = name;

//     next();
//   };

// app.use(middleware({ name: "Handoyo DP" }));

// app.get(
//   "/api/books/:bookId/:authorId",
//   (req: Request, res: Response, next: NextFunction) => {
//     console.log(res.locals.name);

//     res.send(res.locals.name);
//   }
// );

// function middleware(req: Request, res: Response, next: NextFunction) {
//   //   @ts-ignore
//   req.name = "Handoyo";

//   next();
// }

// app.get(
//   "/api/books/:bookId/:authorId",
//   middleware,
//   (req: Request, res: Response, next: NextFunction) => {
//     // @ts-ignore
//     console.log(req.name);
//     // @ts-ignore
//     res.send(req.name);
//   }
// );

// route handler
// function handleGetBookOne(req: Request, res: Response, next: NextFunction) {
//   console.log(req.params);
//   next();
// }

// function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
//   console.log("second handler");
//   return res.send(req.params);
// }

// app.get("/api/books/:bookId/:authorId", [handleGetBookOne, handleGetBookTwo]);

// app.get(
//   "/api/books/:bookId/:authorId",
//   function (req: Request, res: Response, next: NextFunction) {
//     next();
//   },
//   function (req: Request, res: Response, next: NextFunction) {
//     return res.send(req.params);
//   }
// );

// route parameters
// app.get("/api/books/:bookId", (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send(req.params);
// });

// Chaining Request
// app
//   .route("/")
//   .get((req: Request, res: Response) => {
//     return res.send("You make a GET request");
//   })
//   .post((req: Request, res: Response) => {
//     return res.send("You make a POST request");
//   })
//   .put((req: Request, res: Response) => {
//     return res.send("You make a PUT request");
//   })
//   .delete((req: Request, res: Response) => {
//     return res.send("You make a DELETE request");
//   });

// app.get("/", (req: Request, res: Response) => {
//   //   return res.json({
//   //     success: true,
//   //     name: "Handoyo",
//   //   });

//   return res.redirect("http://example.com");
// });

// app.post("/api/data", (req: Request, res: Response) => {
//   console.log(req.body);
//   return res.sendStatus(200);
// });

// // All method
// app.all("/api/all", (req: Request, res: Response) => {
//   return res.sendStatus(200);
// });

app.listen(3000, () => {
  console.log("Application listening at http://localhost:3000");
});
