import { motion } from "framer-motion";

function WhyCard({ item,index }) {

const Icon=item.icon;

return(

<motion.div

initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}

transition={{
duration:.6,
delay:index*.1
}}

viewport={{once:true}}

className="flex gap-5
items-start
bg-white
rounded-2xl
shadow-lg
p-6
hover:shadow-2xl
duration-300"

>

<div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

<Icon className="text-blue-600 text-2xl"/>

</div>

<div>

<h3 className="font-bold text-xl">
{item.title}
</h3>

<p className="text-gray-600 mt-2">
{item.description}
</p>

</div>

</motion.div>

)

}

export default WhyCard;