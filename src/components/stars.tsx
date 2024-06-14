import { useId } from "react";
import Star from "./star";

const Stars = ({ count }: {count: number}) => {
    
    const isValidRating = count > 5 || count < 1;
    const countStars = [...new Array(count).fill(0)];
    const id = useId()

    return isValidRating ? null : (
      <ul className="card-body-stars u-clearfix">
        {countStars.map(() => (
          <li key={id}>
            <Star />
          </li>
        ))}
      </ul>
    );
  };
  
  export default Stars;