import './index.css';

import { AnimatePresence } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { App } from './App.tsx';
import { About } from './routes/About.tsx';
import { Blog } from './routes/Blog.tsx';
import { Projects } from './routes/Projects.tsx';
import { Work } from './routes/Work.tsx';
import { supabase } from './supabase.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AnimatePresence><App /></AnimatePresence>,
  
    children: [
      {
        path: "",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
        loader: async() => {
          const { data } = await supabase.from("journal").select().order('created_at', {ascending: false});
          return data;
        },
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "blog",
        element: <Blog />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
