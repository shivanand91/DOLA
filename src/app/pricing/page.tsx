import LibraryAdminPricing from "@/components/libraryPricing/page";
import StudentPricing from "@/components/studentPricing/page";

export default function Pricing() {
    return (
        <div className="p-4 md:flex md:justify-between grid gap-8">
            <StudentPricing />
            <LibraryAdminPricing />
        </div>
    )
}