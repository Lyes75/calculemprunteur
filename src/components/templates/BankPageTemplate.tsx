import type { BankData } from "@/data/banks";
import SavingsCalculator from "@/components/calculator/SavingsCalculator";
import BankBreadcrumb from "./BankBreadcrumb";
import BankHero from "./BankHero";
import BankInsuranceDetails from "./BankInsuranceDetails";
import BankComparison from "./BankComparison";
import BankSwitchSteps from "./BankSwitchSteps";
import BankFAQ from "./BankFAQ";
import BankRelatedLinks from "./BankRelatedLinks";
import BankCTA from "./BankCTA";

interface BankPageTemplateProps {
  bank: BankData;
}

export default function BankPageTemplate({ bank }: BankPageTemplateProps) {
  return (
    <>
      {/* Breadcrumb */}
      <BankBreadcrumb bankName={bank.name} bankSlug={bank.slug} />

      {/* Hero */}
      <BankHero bank={bank} />

      {/* Calculator pre-filled */}
      <section className="bg-gray-50 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <SavingsCalculator
            preselectedBank={bank.slug}
            preselectedRate={bank.groupRate}
          />
        </div>
      </section>

      {/* Insurance details */}
      <BankInsuranceDetails bank={bank} />

      {/* Comparison table */}
      <BankComparison bank={bank} />

      {/* How to switch */}
      <BankSwitchSteps bank={bank} />

      {/* FAQ */}
      <BankFAQ bank={bank} />

      {/* Related links */}
      <BankRelatedLinks bank={bank} />

      {/* Final CTA */}
      <BankCTA bank={bank} />
    </>
  );
}
