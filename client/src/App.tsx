import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer"; // We will update the content of this file next

// Page Components
import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services"; // REMOVED: Replaced by pillars below
import ResultReach from "./pages/Services/ResultReach"; // NEW
import RevenueReady from "./pages/Services/RevenueReady"; // NEW
import ConsultConnect from "./pages/Services/ConsultConnect"; // NEW
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog"; // KEEPING: Don't lose your blog
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      {/* The Command Center */}
      <Route path="/" component={Home} />

      {/* The 3 Pillars (Replacing /services) */}
      <Route path="/resultreach" component={ResultReach} />
      <Route path="/revenueready" component={RevenueReady} />
      <Route path="/consultconnect" component={ConsultConnect} />

      {/* Support Pages */}
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      
      {/* 404 Handling */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen flex flex-col bg-[oklch(0.12_0.02_260)] text-white font-sans selection:bg-cyan-500/30">
            
            {/* CRITICAL NOTE: 
               Your Header needs to be updated to link to the new pages 
               instead of the old "/services" link.
            */}
            <Header />
            
            <main className="flex-1">
              <Router />
            </main>
            
            {/* This imports the Footer component. 
               Ensure you pasted the new Footer code into src/components/Footer.tsx 
            */}
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;