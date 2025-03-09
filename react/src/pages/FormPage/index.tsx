import { useRef, useState } from "react";
import css from "./FormPage.module.css";
import { Button } from "@/components/Button";

export const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteTechs, setFavoriteTechs] = useState<string[]>([]);

  const resultRef = useRef<HTMLDivElement>(null);

  const techs = ["React", "Vue", "Svelte", "jQuery"];

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (resultRef.current) {
            resultRef.current.innerHTML = `
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Favorite techs: ${favoriteTechs.join(", ")}</p>
            `;
          }
        }}
      >
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className={css.checkboxLabelWrapper}>
          {techs.map((tech) => (
            <label key={tech}>
              <input
                type="checkbox"
                checked={favoriteTechs.includes(tech)}
                onChange={(e) => {
                  setFavoriteTechs((prev) => {
                    if (e.target.checked) {
                      return [...prev, tech];
                    }
                    return prev.filter((t) => t !== tech);
                  });
                }}
              />
              {tech}
            </label>
          ))}
        </div>
        <Button color="primary" type="submit">Submit</Button>
      </form>
      <div ref={resultRef} />
    </>
  );
};
