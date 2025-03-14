import { ShieldCheck, CreditCard, BarChart, RefreshCcw, Headphones, Award } from "lucide-react";

const features = [
  { icon: CreditCard, title: "Easy Payments", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo." },
  { icon: ShieldCheck, title: "Data Security", text: "Auge pulvinar justo, fermentum fames aliquam accumsan vestibulum non." },
  { icon: BarChart, title: "Cost Statistics", text: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh." },
  { icon: RefreshCcw, title: "Regular Cashback", text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend." },
  { icon: Headphones, title: "Support 24/7", text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris." },
  { icon: Award, title: "Top Standards", text: "Facubus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu." }
];

export default function AppFeature() {
  return (
    <section id="app-feature">
      <div className="container">
        
        {/* Vänster: SVG Bild */}
        <div className="feature-image">
          <img 
            src="/images/iphone.svg" 
            alt="Mobile App" 
            className="svg-img"
          />
        </div>

        {/* Höger: Text & Features */}
        <div className="feature-content">
          <h2 className="feature-title">App Features</h2>
          <p className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultricies.
          </p>

          {/* Features Grid */}
          <div className="feature-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-md">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
