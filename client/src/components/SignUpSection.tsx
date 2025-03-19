import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Create an Account",
    description: "Sign up for a new account on Stake.com.",
  },
  {
    number: 2,
    title: "Enter Code PENNY",
    description: "Go to settings, find the code field, and enter \"PENNY\".",
  },
  {
    number: 3,
    title: "Verify Your Account",
    description: "Complete the verification process to unlock all benefits.",
  },
  {
    number: 4,
    title: "Start Earning Rewards",
    description: "Begin playing to earn rewards and climb the ranks.",
  },
];

const benefits = [
  "No deposit required",
  "No wager requirements",
  "Instant access to rewards system",
  "Available for crypto deposits",
];

const SignUpSection = () => {
  return (
    <section id="signup" className="py-20 bg-gradient-to-b from-dark to-primary/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Get <span className="text-secondary">Started</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sign up using code PENNY and start earning rewards immediately.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-primary/20 to-dark-purple/20 rounded-xl overflow-hidden border border-primary/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">Sign Up Bonus</h3>
                  <p className="text-gray-300 mb-6">
                    New users can earn $1 per day for 7 days - a total of $7 with no deposit or wager required.
                  </p>

                  <div className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                          <i className="fas fa-check text-secondary text-xs"></i>
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-dark font-bold py-4 px-8 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Sign Up Now
                  </a>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="bg-dark p-6 rounded-xl border border-primary/30">
                    <h4 className="text-xl font-semibold mb-4">How to Use Code PENNY</h4>

                    <ol className="space-y-6">
                      {steps.map((step, index) => (
                        <motion.li 
                          key={index} 
                          className="flex"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center mr-3 text-secondary font-bold">
                            {step.number}
                          </div>
                          <div>
                            <p className="font-medium">{step.title}</p>
                            <p className="text-sm text-gray-400 mt-1">{step.description}</p>
                          </div>
                        </motion.li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 bg-dark p-8 rounded-xl border border-primary/20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <i className="fab fa-discord text-6xl text-blue-400"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                <p className="text-gray-300 mb-4">
                  Connect with other players, get support, and stay updated on the latest promotions and giveaways.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center bg-primary/20 hover:bg-primary/30 text-white py-3 px-6 rounded-lg transition"
                  >
                    <i className="fab fa-discord mr-2"></i>
                    Discord
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center bg-primary/20 hover:bg-primary/30 text-white py-3 px-6 rounded-lg transition"
                  >
                    <i className="fab fa-telegram mr-2"></i>
                    Telegram
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center bg-primary/20 hover:bg-primary/30 text-white py-3 px-6 rounded-lg transition"
                  >
                    <i className="fab fa-twitter mr-2"></i>
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
