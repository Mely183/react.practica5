import clsx from "clsx"
export default function Item ({text, onDelete}) {
    return(
     
        <article 
        className={clsx(
            "border border-white/5 rounded",
            "flex justify-betwen items-center",
            "p-2",
            {"bg-red-500" : text === "lavar"}
            )}>
            <span>{text}</span>
           <span className={clsx ("bg-purple-600/50 rounded",
            "p-2 cursor-pointer hover:bg-slate-500")}  onClick={onDelete}>
             Eliminar
           </span>
        </article>
      
    );
}