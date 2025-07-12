import CyberLabProjects from "../components/CyberLabProjects";
import CyberLabDemos from "../components/CyberLabDemos";
import CyberLabWriteups from "../components/CyberLabWriteups";
import CyberLabTools from "../components/CyberLabTools";

export default function CyberLab() {
  return (
    <div className="p-6 space-y-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700">🧪 Cyber Lab</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects Showcase</h2>
        <CyberLabProjects />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Interactive Demos</h2>
        <CyberLabDemos />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Writeups & Notes</h2>
        <CyberLabWriteups />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Tool Bench</h2>
        <CyberLabTools />
      </section>
    </div>
  );
}

