import { ButtonHTMLAttributes } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { Jura } from "next/font/google";
import styles from "./styles.module.scss";
import React from "react";
import clsx from "clsx";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Propriedade booleana que indica o estado de carregamento do botão, substituindo o texto por um spinner  */
  isloading?: boolean;
  /**
   * Texto exibido dentro do botão.
   * Desativa a operação do botão durante o loading
   */
  placeholder: string | React.ReactNode;
  /**
   * Desativa o botão e insira um tema cinza.
   * */
  disabled?: boolean;
  /**
   * Evento de clique do mouse.
   * Obs: só é acionado quando o botão não está com o loading ativo.
   */
  onClick?: () => void;
  /**
   * Define o tema do botão.
   * @default "primary"
   */
  theme?: "primary" | "secondary";
  /**
   * Define o tamanho do botão.
   * @default "medium"
   */
  size?: "small" | "medium" | "large";
}

const jura = Jura({ subsets: ["latin"] });

export function Button(props: ButtonInterface) {
  const {
    theme = "primary",
    isloading,
    placeholder,
    disabled,
    onClick,
    size = "medium",
    ...rest
  } = props;

  function handleClickOnButton() {
    if (isloading) {
      return;
    }

    onClick && onClick();
  }

  return (
    <button
      className={clsx(styles.button, jura.className, {
        [styles.primary]: theme === "primary",
        [styles.secondary]: theme === "secondary",
        [styles.buttonSizeSmall]: size === "small",
        [styles.buttonSizeMedium]: size === "medium",
        [styles.buttonSizeLarge]: size === "large",
      })}
      disabled={disabled}
      onClick={handleClickOnButton}
      {...rest}
    >
      {isloading ? <ProgressSpinner /> : <>{placeholder}</>}
    </button>
  );
}
