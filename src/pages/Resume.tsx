import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Resume = () => {
  const pdfPath = "/Rayyan_Hisham_Resume_auto.pdf";

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-1">Rayyan Hisham</h1>
              <p className="text-muted-foreground">Professional Resume</p>
            </div>

            <div className="flex gap-3">
              <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <FileText size={18} className="mr-2" />
                  View PDF
                </Button>
              </a>

              <a href={pdfPath} download>
                <Button size="lg">
                  <Download size={18} className="mr-2" />
                  Download
                </Button>
              </a>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="w-full h-[840px] md:h-[1000px]">
                <iframe
                  src={pdfPath}
                  title="Resume PDF"
                  className="w-full h-full border-0"
                >
                  <p>Your browser does not support iframes. You can download the resume <a href={pdfPath}>here</a>.</p>
                </iframe>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-muted-foreground">
            <p className="text-sm">Open or download the PDF to view the full resume.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
