export const Pages = {
    home: {
        title: 'Inicio',
        icon: 'fullEgg',
        block: 'left',
        render: (content) => {
            content.innerHTML = '<p>Home test.</p>';
        }
    },
    modA: {
        title: 'modA',
        icon: 'basket',
        block: 'center',
        render: (content) => {
            content.innerHTML = '<p>modA test.</p>';
        }
    },
    modB: {
        title: 'modB',
        icon: 'bird',
        block: 'center',
        render: (content) => {
            content.innerHTML = '<p>modB test.</p>';
        }
    },
    modC: {
        title: 'modC',
        icon: 'tractor',
        block: 'center',
        render: (content) => {
            content.innerHTML = '<p>modC test.</p>';
        }
    },
    user: {
        title: 'Usuario',
        icon: 'user',
        block: 'right',
        render: (content) => {
            content.innerHTML = '<p>Usuario test.</p>';
        }
    }
}