import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto ">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-teal-500"></div>
              <h2 className="text-sm uppercase tracking-wider text-teal-500 font-medium">
                Contact
              </h2>
              <div className="w-12 h-px bg-teal-500"></div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Kontak saya yang bisa dihubungi
            </h3>
            {/* <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {"I'm"} always interested in hearing about new opportunities and
              interesting projects. Whether you have a question or just want to
              say hi, {"I'll"} try my best to get back to you!
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="p-8 text-center bg-card border-border hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    Email
                  </h4>
                  <p className="text-muted-foreground">
                    diphawgna@gmail.com
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-primary/20 hover:border-primary hover:bg-teal-500/5 bg-transparent"
                  asChild
                >
                  <a href="mailto:diphawgna@gmail.com">Send Email</a>
                </Button>
              </div>
            </Card>

            <Card className="p-8 text-center bg-card border-border hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto">
                  <MessageCircle className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    WhatsApp
                  </h4>
                  <p className="text-muted-foreground">+62 853-3132-0909</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-green-500/20 hover:border-green-500 hover:bg-green-500/5 bg-transparent"
                  asChild
                >
                  <a
                    href="https://wa.me/6285331320909"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* <div className="text-center space-y-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
              asChild
            >
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Usually responds within 24 hours
            </p>
          </div> */}
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground text-sm">
            <p>© 2025 Dipha Wiguna. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
