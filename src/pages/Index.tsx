import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Globe, 
  Briefcase, 
  Zap, 
  Shield, 
  Users,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Target,
  Rocket,
  Heart,
  ChevronRight,
  Play,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Chatbot } from '@/components/Chatbot';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import heroDashboard from '@/assets/hero-dashboard.jpg';
import { useState } from 'react';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Header/Navigation */}
      <motion.header 
        className="relative z-50 px-6 py-6 glass-card border-b border-white/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img 
              src="/lovable-uploads/f7de1567-6930-4510-8e22-a4606c1810e9.png" 
              alt="Raghunathan Money Logo" 
              className="h-12 w-auto hover:drop-shadow-lg transition-all"
            />
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform transition-transform">Services</a>
            <a href="#platform" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform transition-transform">Platform</a>
            <a href="#research" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform transition-transform">Research</a>
             <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform transition-transform">Contact</a>
             <ThemeToggle />
             <motion.div
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <Button className="btn-primary px-6 py-3 rounded-xl">
                 Open Account
                 <ArrowRight className="w-4 h-4 ml-2" />
               </Button>
             </motion.div>
           </div>

           {/* Mobile Menu Button */}
           <div className="md:hidden flex items-center space-x-3">
             <ThemeToggle />
             <Button
               variant="ghost"
               size="icon"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="glass rounded-xl"
             >
               {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </Button>
           </div>
         </nav>

         {/* Mobile Menu */}
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             className="md:hidden absolute top-full left-0 right-0 glass-card border-t border-white/10 p-6"
           >
             <div className="flex flex-col space-y-4">
               <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
               <a href="#platform" className="text-foreground hover:text-primary transition-colors font-medium">Platform</a>
               <a href="#research" className="text-foreground hover:text-primary transition-colors font-medium">Research</a>
               <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">Pricing</a>
               <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
               <Button className="btn-primary w-full">
                 Open Account
                 <ArrowRight className="w-4 h-4 ml-2" />
               </Button>
             </div>
           </motion.div>
         )}
       </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-mesh overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-40 right-20 w-32 h-32 bg-primary/5 rounded-3xl blur-2xl"
            animate={{ y: [0, 30, 0], rotate: [0, -90, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 right-10 w-16 h-16 bg-primary/8 rounded-full blur-lg"
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-charcoal leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Your Partner in{' '}
                <span className="text-gradient">Wealth</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl lg:text-3xl text-charcoal/80 font-medium"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                One Platform to Trade, Invest, Diversify, and Grow
              </motion.h2>
              
              <motion.p 
                className="text-lg text-charcoal/70 max-w-2xl leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Experience seamless trading across equity, F&O, commodities, currency, IPOs, mutual funds, and global markets — all at just ₹9/order or ₹999/month unlimited.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button className="btn-primary group px-8 py-4 text-lg rounded-2xl">
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Open Free Account
              </Button>
              <Button className="btn-glass px-8 py-4 text-lg rounded-2xl group">
                <Play className="w-5 h-5 mr-2" />
                Explore Our Plans
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Live Ticker */}
            <motion.div 
              className="glass-card rounded-2xl p-4 mt-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center space-x-6 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-charcoal">NIFTY 50:</span>
                  <span className="text-green-600">21,456.78 ↗ +1.2%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-charcoal">SENSEX:</span>
                  <span className="text-green-600">70,892.12 ↗ +0.8%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-charcoal">GOLD:</span>
                  <span className="text-primary">₹68,450 ↗ +0.3%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src={heroDashboard}
                alt="Trading Dashboard"
                className="w-full h-auto rounded-3xl shadow-premium hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-6 -left-6 glass-card rounded-2xl p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Portfolio</p>
                    <p className="text-lg font-bold text-green-600">+₹2,45,000</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Success Rate</p>
                    <p className="text-lg font-bold text-primary">94.2%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              The Smarter Way to Trade, <span className="text-gradient">Invest & Succeed</span>
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Comprehensive financial solutions designed for every investor's journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Equity & Derivatives",
                description: "Trade with confidence using our advanced strategy builder and real-time market data",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                icon: Globe,
                title: "Commodities & Currencies",
                description: "Multi-exchange access with comprehensive insights for commodity and forex trading",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                icon: Briefcase,
                title: "Direct Mutual Funds",
                description: "Zero commission investments with maximum tax benefits and professional management",
                gradient: "from-primary to-primary-glow"
              },
              {
                icon: Globe,
                title: "Global Investing",
                description: "Own fractional shares of world's top companies with seamless international access",
                gradient: "from-orange-500 to-red-600"
              },
              {
                icon: Zap,
                title: "Margin Trading Funding",
                description: "Amplify your trading potential with up to 4x leverage and flexible funding options",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                icon: BarChart3,
                title: "SLBM",
                description: "Earn passive income by lending your idle stocks through our secure lending program",
                gradient: "from-teal-500 to-cyan-600"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass-card rounded-3xl p-8 h-full hover:shadow-premium transition-all duration-500 border-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="text-primary hover:text-primary-glow group p-0">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button className="btn-primary px-8 py-4 text-lg rounded-2xl group">
              Find the Right Solution for You
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section id="platform" className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Cutting-Edge <span className="text-gradient">Trading Technology</span>
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Built for every investor, from beginners to professional traders
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {[
              {
                icon: Zap,
                title: "Lightning-Fast Execution",
                description: "Execute trades in milliseconds with our advanced order management system"
              },
              {
                icon: Target,
                title: "Next-Gen Algo Trading",
                description: "Stoxxo, SpeedBot, and XTS API integration for automated strategies"
              },
              {
                icon: BarChart3,
                title: "Advanced Options Tools",
                description: "Visual payoff graphs and comprehensive strategy builder for options trading"
              },
              {
                icon: TrendingUp,
                title: "Powerful Analytics",
                description: "TradingView integration with professional charting and technical analysis"
              },
              {
                icon: Users,
                title: "Built for Everyone",
                description: "Intuitive interface designed for both novice and expert traders"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <Button className="btn-primary px-8 py-4 text-lg rounded-2xl">
              Explore Our Platforms
            </Button>
            <Button className="btn-glass px-8 py-4 text-lg rounded-2xl">
              Start Trading Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Research & Education Hub */}
      <section id="research" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Smarter Decisions with <span className="text-gradient">RMoney Research & Gyan</span>
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              SEBI-registered research and comprehensive educational resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "SEBI-Registered Research",
                description: "Expert calls with transparent track record and regulatory compliance",
                color: "text-green-600"
              },
              {
                icon: Play,
                title: "Live Market Updates",
                description: "Real-time insights and weekly market picks carousel",
                color: "text-blue-600"
              },
              {
                icon: BarChart3,
                title: "Performance Tracker",
                description: "Transparent, data-driven recommendation tracking",
                color: "text-primary"
              },
              {
                icon: Award,
                title: "RMoney Gyan",
                description: "Educational blogs, webinars, and comprehensive YouTube content",
                color: "text-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="glass-card rounded-3xl p-6 text-center h-full border-0 hover:shadow-premium transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 ${item.color} bg-current bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-4">{item.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="btn-primary px-8 py-4 text-lg rounded-2xl group">
              <Award className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Visit Knowledge Center
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section id="pricing" className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Transparent Brokerage. <span className="text-gradient">No Hidden Surprises.</span>
            </h2>
            <p className="text-xl text-charcoal/70">
              Choose the plan that fits your trading style
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Heart,
                title: "₹9 Per Order",
                subtitle: "Perfect for casual traders",
                features: [
                  "All segments available",
                  "Free account opening",
                  "Free Demat AMC",
                  "Advanced trading tools",
                  "Research & recommendations"
                ],
                cta: "Choose Basic Plan",
                popular: false
              },
              {
                icon: Rocket,
                title: "₹999 Monthly Unlimited",
                subtitle: "Ideal for active traders",
                features: [
                  "Unlimited trades",
                  "Priority customer support",
                  "Advanced analytics",
                  "Premium research calls",
                  "Portfolio management tools"
                ],
                cta: "Choose Pro Plan",
                popular: true
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card className={`glass-card rounded-3xl p-8 h-full border-0 ${plan.popular ? 'ring-2 ring-primary' : ''} hover:shadow-premium transition-all duration-300`}>
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 ${plan.popular ? 'bg-primary' : 'bg-charcoal'} rounded-2xl flex items-center justify-center`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">{plan.title}</h3>
                    <p className="text-charcoal/70">{plan.subtitle}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-charcoal/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full py-4 rounded-2xl font-semibold ${plan.popular ? 'btn-primary' : 'btn-glass'}`}>
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-charcoal/70 mb-6">
              Free account opening • Free Demat AMC • No hidden charges
            </p>
            <Button className="btn-glass px-8 py-4 text-lg rounded-2xl">
              Compare Plans & Calculate Your Savings
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust & Excellence Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              The <span className="text-gradient">RMoney Advantage</span>
            </h2>
            <p className="text-xl text-charcoal/70">
              Built on trust, powered by excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: Award,
                value: "18+",
                label: "Years of Trust",
                description: "Established financial expertise"
              },
              {
                icon: Users,
                value: "1,00,000+",
                label: "Happy Clients",
                description: "Satisfied investors nationwide"
              },
              {
                icon: MapPin,
                value: "200+",
                label: "Locations Nationwide",
                description: "Pan-India presence"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="glass-card rounded-3xl p-8 text-center border-0 hover:shadow-premium transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.h3 
                    className="text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.h3>
                  <h4 className="text-xl font-semibold text-charcoal mb-2">{stat.label}</h4>
                  <p className="text-charcoal/70">{stat.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button className="btn-primary px-8 py-4 text-lg rounded-2xl">
              Discover Our Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-mesh relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-24 h-24 bg-primary/8 rounded-full blur-xl"
            animate={{ scale: [1.2, 1, 1.2], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Start Your <span className="text-gradient">Wealth Journey</span> Today
            </h2>
            <p className="text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto">
              Join thousands who chose smarter trading. Open your free account now and experience the RMoney difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="btn-primary px-10 py-5 text-xl rounded-2xl animate-pulse-glow group">
                  <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  Open Free Account
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="btn-glass px-10 py-5 text-xl rounded-2xl group">
                  <Phone className="w-6 h-6 mr-3" />
                  Schedule a Demo Call
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-charcoal dark:bg-background border-t border-white/10 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <motion.img 
                src="/lovable-uploads/f7de1567-6930-4510-8e22-a4606c1810e9.png" 
                alt="Raghunathan Money" 
                className="h-12 w-auto filter dark:brightness-0 dark:invert"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <p className="text-white/70 dark:text-foreground/70 leading-relaxed">
                Your trusted partner in wealth creation. Investment khushiyon ka with transparent, technology-driven solutions.
              </p>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="text-white/70 dark:text-foreground/70 hover:text-primary hover:bg-primary/10">
                    <Mail className="w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="text-white/70 dark:text-foreground/70 hover:text-primary hover:bg-primary/10">
                    <Phone className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white dark:text-foreground">Services</h4>
              <ul className="space-y-2 text-white/70 dark:text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Equity Trading</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Mutual Funds</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Global Investing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Commodities</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white dark:text-foreground">Resources</h4>
              <ul className="space-y-2 text-white/70 dark:text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Research</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Education</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Market Updates</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white dark:text-foreground">Contact</h4>
              <ul className="space-y-2 text-white/70 dark:text-foreground/70">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>1800-123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@rmoney.in</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 dark:border-foreground/20 mt-12 pt-8 text-center text-white/60 dark:text-foreground/60">
            <p>&copy; 2024 Raghunathan Money. All rights reserved. | SEBI Reg: INZ000123456</p>
          </div>
        </div>
      </footer>

      {/* Floating Components */}
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
};

export default Index;