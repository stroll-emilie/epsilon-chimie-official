export function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    
    const headerHeight = 83;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    
    window.scrollTo({ top, behavior: 'smooth' });
}