import { useEffect } from "react";

export function AmoCrm() {
  useEffect(() => {
    console.log("Монтирование AmoCRMForm");

    // Проверяем, есть ли уже скрипт
    if (document.getElementById("amoforms_script_1515162")) {
      console.log("Скрипт AmoCRM уже загружен");
      return;
    }

    // Добавляем инициализационный скрипт AmoCRM
    const initScript = document.createElement("script");
    initScript.innerHTML = `
      !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},
      a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},
      a[o+r]({id:"1515162",hash:"35d49be566cfb696e1e5012da70bf04b",locale:"ru"}),
      a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
    `;
    document.body.appendChild(initScript);

    // Добавляем скрипт формы AmoCRM
    const script = document.createElement("script");
    script.id = "amoforms_script_1515162";
    script.async = true;
    script.charset = "utf-8";
    script.src =
      "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1743323873";

    script.onload = () => {
      console.log("Скрипт AmoCRM загружен");
    };

    script.onerror = () => {
      console.error("Ошибка загрузки скрипта AmoCRM");
    };

    document.body.appendChild(script);

    return () => {
      console.log("Размонтирование AmoCRMForm");
      script.remove();
      initScript.remove();
    };
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Форма AmoCRM</h2>
      <div id="amoforms_form_1515162"></div>
    </div>
  );
}
