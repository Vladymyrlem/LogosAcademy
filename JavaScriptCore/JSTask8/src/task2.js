var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Классика";
alert( styles.shift() );
styles.unshift("Реп", "Реггі");
alert(styles);