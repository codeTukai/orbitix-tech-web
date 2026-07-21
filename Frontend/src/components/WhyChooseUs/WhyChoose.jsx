import WhyImage from "./WhyImage";
import WhyCard from "./WhyCard";
import { whyChoose } from "./whyData";

function WhyChoose(){

return(

<section className="py-32">

<div className="container mx-auto px-5">

<div className="text-center mb-20">

<span className="text-blue-600 font-semibold">
WHY ORBITIX
</span>

<h2 className="text-5xl font-black mt-5">

Why Choose

<span className="text-blue-600">
 Orbitix Technologies
</span>

</h2>

<p className="text-gray-600 mt-6 max-w-3xl mx-auto">

We combine creativity, innovation,
modern technologies and business strategy
to build powerful digital products.

</p>

</div>

<div className="grid lg:grid-cols-2 gap-20 items-center">

<WhyImage/>

<div className="grid gap-6">

{

whyChoose.map((item,index)=>(

<WhyCard

key={item.id}

item={item}

index={index}

/>

))

}

</div>

</div>

</div>

</section>

)

}

export default WhyChoose;