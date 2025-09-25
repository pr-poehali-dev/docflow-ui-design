import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

const Index = () => {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const stats = [
    { title: 'Входящие документы', value: 47, trend: '+12%', color: 'text-blue-600' },
    { title: 'Исходящие документы', value: 23, trend: '+8%', color: 'text-green-600' },
    { title: 'В обработке', value: 15, trend: '-3%', color: 'text-yellow-600' },
    { title: 'Контрагенты', value: 85, trend: '+5%', color: 'text-purple-600' },
  ]

  const recentDocuments = [
    { id: 1, title: 'Договор поставки №001', type: 'Входящий', date: '2025-09-24', status: 'Новый' },
    { id: 2, title: 'Счет-фактура №1205', type: 'Исходящий', date: '2025-09-24', status: 'Отправлен' },
    { id: 3, title: 'Акт приемки-передачи', type: 'Входящий', date: '2025-09-23', status: 'В работе' },
    { id: 4, title: 'Заявка на оплату', type: 'Исходящий', date: '2025-09-23', status: 'Согласован' },
  ]

  const AuthDialog = ({ type }: { type: 'login' | 'register' }) => (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-center text-xl font-semibold text-docflow-navy">
          {type === 'login' ? 'Вход в систему' : 'Регистрация'}
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4 pt-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Пароль</Label>
          <Input id="password" type="password" />
        </div>
        {type === 'register' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="company">Компания</Label>
              <Input id="company" placeholder="Название компании" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">ФИО</Label>
              <Input id="name" placeholder="Иван Иванов" />
            </div>
          </>
        )}
        <Button 
          className="w-full bg-docflow-navy hover:bg-docflow-navy/90" 
          onClick={() => setIsAuthenticated(true)}
        >
          {type === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </div>
    </DialogContent>
  )

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl shadow-2xl border-0">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-docflow-navy text-white p-8 md:p-12 flex flex-col justify-center">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-docflow-yellow rounded-full flex items-center justify-center mx-auto">
                    <Icon name="FileText" size={32} className="text-docflow-navy" />
                  </div>
                  <h1 className="text-3xl font-bold">DocFlow Solutions</h1>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Современная система электронного документооборота для вашего бизнеса
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-docflow-yellow" />
                      <span>Безопасное хранение документов</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-docflow-yellow" />
                      <span>Автоматизация бизнес-процессов</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-docflow-yellow" />
                      <span>Контроль исполнения задач</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-docflow-navy">Добро пожаловать</h2>
                    <p className="text-gray-600">Войдите в систему или создайте новый аккаунт</p>
                  </div>
                  
                  <div className="space-y-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-docflow-navy hover:bg-docflow-navy/90 h-12 text-base font-medium">
                          <Icon name="LogIn" size={20} className="mr-2" />
                          Войти в систему
                        </Button>
                      </DialogTrigger>
                      <AuthDialog type="login" />
                    </Dialog>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full h-12 text-base font-medium border-docflow-navy text-docflow-navy hover:bg-docflow-navy hover:text-white">
                          <Icon name="UserPlus" size={20} className="mr-2" />
                          Создать аккаунт
                        </Button>
                      </DialogTrigger>
                      <AuthDialog type="register" />
                    </Dialog>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Продолжая, вы соглашаетесь с{' '}
                      <a href="#" className="text-docflow-navy hover:underline">условиями использования</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const SidebarItem = ({ icon, label, active, onClick }: { 
    icon: string; 
    label: string; 
    active: boolean; 
    onClick: () => void 
  }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        active 
          ? 'bg-docflow-navy text-white shadow-lg' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <Icon name={icon as any} size={20} />
      <span className="font-medium">{label}</span>
    </button>
  )

  const StatCard = ({ title, value, trend, color }: any) => (
    <Card className="hover:shadow-lg transition-shadow animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-2">{title}</p>
            <p className={`text-3xl font-bold ${color}`}>{value}</p>
          </div>
          <div className="text-right">
            <Badge variant={trend.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
              {trend}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const DocumentCard = ({ doc }: { doc: any }) => (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-docflow-navy/10 rounded-lg flex items-center justify-center">
          <Icon name="FileText" size={18} className="text-docflow-navy" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{doc.title}</h4>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{doc.type}</span>
            <span>•</span>
            <span>{doc.date}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant="outline">{doc.status}</Badge>
        <Button variant="ghost" size="sm">
          <Icon name="Eye" size={16} />
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white shadow-xl border-r">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-docflow-navy rounded-lg flex items-center justify-center">
              <Icon name="FileText" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="font-bold text-docflow-navy">DocFlow</h1>
              <p className="text-xs text-gray-500">Solutions</p>
            </div>
          </div>
        </div>
        
        <nav className="p-4 space-y-2">
          <SidebarItem
            icon="Home"
            label="Главная"
            active={currentPage === 'dashboard'}
            onClick={() => setCurrentPage('dashboard')}
          />
          <SidebarItem
            icon="Download"
            label="Входящие"
            active={currentPage === 'incoming'}
            onClick={() => setCurrentPage('incoming')}
          />
          <SidebarItem
            icon="Upload"
            label="Исходящие"
            active={currentPage === 'outgoing'}
            onClick={() => setCurrentPage('outgoing')}
          />
          <SidebarItem
            icon="Users"
            label="Контрагенты"
            active={currentPage === 'contractors'}
            onClick={() => setCurrentPage('contractors')}
          />
          <SidebarItem
            icon="Settings"
            label="Настройки"
            active={currentPage === 'settings'}
            onClick={() => setCurrentPage('settings')}
          />
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-500 hover:text-gray-700"
            onClick={() => setIsAuthenticated(false)}
          >
            <Icon name="LogOut" size={20} className="mr-2" />
            Выйти
          </Button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-docflow-navy">Панель управления</h1>
              <p className="text-gray-600 mt-1">Добро пожаловать в DocFlow Solutions</p>
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-docflow-yellow hover:bg-docflow-yellow/90 text-docflow-navy font-medium">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать документ
              </Button>
              <div className="w-10 h-10 bg-docflow-navy rounded-full flex items-center justify-center">
                <Icon name="User" size={20} className="text-white" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={20} className="text-docflow-navy" />
                    Последние документы
                  </CardTitle>
                  <CardDescription>
                    Документы, требующие вашего внимания
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentDocuments.map((doc) => (
                    <DocumentCard key={doc.id} doc={doc} />
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-lg">Быстрые действия</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Upload" size={18} className="mr-2" />
                    Загрузить документ
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="UserPlus" size={18} className="mr-2" />
                    Добавить контрагента
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Search" size={18} className="mr-2" />
                    Поиск документов
                  </Button>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-lg">Уведомления</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Icon name="AlertTriangle" size={16} className="text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Истекает срок</p>
                      <p className="text-xs text-gray-600">Договор №145 истекает через 3 дня</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <Icon name="Mail" size={16} className="text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Новый документ</p>
                      <p className="text-xs text-gray-600">Получен счет от ООО "Партнер"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Index