// =============================
// 1. HACER CLIC EN LAS IMÁGENES DEL INICIO
// =============================
document.querySelectorAll(".gallery li img").forEach(img => {
  img.addEventListener("click", () => {
    const alt = img.alt.toLowerCase();

    if (alt.includes("estudiante")) {
      window.location.href = "Estudiantes.html";
    } 
    else if (alt.includes("profesor")) {
      window.location.href = "Profesores.html";
    }
  });
});

// =============================
// 2. CONTROL DE ROLES (ADMIN / ESTUDIANTE)
// =============================

// Guardar sesión al iniciar
window.addEventListener("DOMContentLoaded", () => {
  const rolGuardado = localStorage.getItem("rol");

  // Si estamos en la página de registro, guardar rol seleccionado
  const selectRol = document.getElementById("rol");
  if (selectRol) {
    document.querySelector("form").addEventListener("submit", () => {
      localStorage.setItem("rol", selectRol.value);
    });
  }

  // Mostrar funciones según rol
  if (rolGuardado === "administrador") {
    activarModoAdministrador();
  } else if (rolGuardado === "usuario") {
    activarModoEstudiante();
  }
});

// =============================
// 3. FUNCIONES PARA ADMINISTRADOR
// =============================
function activarModoAdministrador() {
  console.log("🔧 Modo administrador activo");

  // Habilitar campos de edición de profesores/notas
  document.querySelectorAll("input, select").forEach(el => el.disabled = false);

  // Mostrar botones de acciones
  document.querySelectorAll(".btn-edit, .btn-delete").forEach(btn => {
    btn.style.display = "inline-block";
  });
}

// =============================
// 4. FUNCIONES PARA ESTUDIANTE
// =============================
function activarModoEstudiante() {
  console.log("👨‍🎓 Modo estudiante activo");

  // Bloquear edición
  document.querySelectorAll("input:not(.solo-lectura), select").forEach(el => {
    el.disabled = true;
  });

  // Ocultar botones de edición
  document.querySelectorAll(".btn-edit, .btn-delete").forEach(btn => {
    btn.style.display = "none";
  });
}

// =============================
// 5. BOTÓN "VER CALIFICACIONES"
// =============================
document.querySelectorAll(".btn-ver").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("📘 Aquí se mostrarán las calificaciones reales desde la BD.");
  });
});
