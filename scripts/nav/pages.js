export const Pages = {
    home: {
        title: 'Inicio',
        render: (content) => {
            content.innerHTML = '<p>Home test.</p>';
        }
    },
    modA: {
        title: 'modA',
        render: (content) => {
            content.innerHTML = '<p>modA test.</p>';
        }
    },
    modB: {
        title: 'modB',
        render: (content) => {
            content.innerHTML = '<p>modB test.</p>';
        }
    },
    modC: {
        title: 'modC',
        render: (content) => {
            content.innerHTML = '<p>modC test.</p>';
        }
    },
    user: {
        title: 'Usuario',
        render: (content) => {
            content.innerHTML = '<p>Usuario test.</p>';
        }
    }
}