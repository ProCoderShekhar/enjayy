import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-slate-900 to-black pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-md mx-4 bg-black/40 border border-sky-900/30 shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center mb-4 text-center">
                <AlertCircle className="h-16 w-16 text-sky-400 mb-4" />
                <h1 className="text-3xl font-bold text-white mb-2">404 Page Not Found</h1>
                <p className="text-gray-400 mb-6">
                  The page you're looking for doesn't exist or has been moved.
                </p>
                <Link href="/">
                  <a className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:opacity-90 transition">
                    <Home size={18} />
                    <span>Back to Home</span>
                  </a>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
