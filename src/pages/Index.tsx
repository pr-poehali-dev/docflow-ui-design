import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Компонент главной страницы
const DashboardPage = ({ stats, recentDocuments }: any) => {
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
        {stats.map((stat: any, index: number) => (
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
              {recentDocuments.map((doc: any) => (
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
  )
}

// Компонент страницы входящих документов
const IncomingDocumentsPage = ({ documents }: any) => (
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-docflow-navy">Входящие документы</h1>
        <p className="text-gray-600 mt-1">Управление входящими документами и корреспонденцией</p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">
          <Icon name="Filter" size={20} className="mr-2" />
          Фильтры
        </Button>
        <Button className="bg-docflow-navy hover:bg-docflow-navy/90">
          <Icon name="Upload" size={20} className="mr-2" />
          Загрузить документ
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">47</p>
          <p className="text-sm text-gray-600">Всего документов</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">23</p>
          <p className="text-sm text-gray-600">Обработано</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600">15</p>
          <p className="text-sm text-gray-600">В работе</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-red-600">9</p>
          <p className="text-sm text-gray-600">Просрочено</p>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Список документов</CardTitle>
        <CardDescription>Все входящие документы с возможностью фильтрации и поиска</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex gap-4">
          <Input placeholder="Поиск по названию документа..." className="max-w-sm" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Статус" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Новый</SelectItem>
              <SelectItem value="inwork">В работе</SelectItem>
              <SelectItem value="processed">Обработан</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Документ</TableHead>
              <TableHead>Контрагент</TableHead>
              <TableHead>Дата получения</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc: any) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">{doc.title}</TableCell>
                <TableCell>{doc.contractor}</TableCell>
                <TableCell>{doc.date}</TableCell>
                <TableCell>{doc.amount}</TableCell>
                <TableCell>
                  <Badge variant={doc.status === 'Новый' ? 'default' : 'secondary'}>{doc.status}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Icon name="Eye" size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="Download" size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="Edit" size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
)

// Компонент страницы исходящих документов
const OutgoingDocumentsPage = ({ documents }: any) => (
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-docflow-navy">Исходящие документы</h1>
        <p className="text-gray-600 mt-1">Создание и отправка документов контрагентам</p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">
          <Icon name="Filter" size={20} className="mr-2" />
          Фильтры
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-docflow-navy hover:bg-docflow-navy/90">
              <Icon name="Plus" size={20} className="mr-2" />
              Создать документ
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Создание нового документа</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Тип документа</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="invoice">Счет-фактура</SelectItem>
                      <SelectItem value="contract">Договор</SelectItem>
                      <SelectItem value="act">Акт выполненных работ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Контрагент</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите контрагента" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="partner">ООО "Партнер"</SelectItem>
                      <SelectItem value="client">ООО "Клиент"</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Название документа</Label>
                <Input placeholder="Введите название документа" />
              </div>
              <div className="space-y-2">
                <Label>Сумма</Label>
                <Input placeholder="0 ₽" type="number" />
              </div>
              <div className="space-y-2">
                <Label>Описание</Label>
                <Textarea placeholder="Дополнительная информация..." rows={3} />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline">Отмена</Button>
                <Button className="bg-docflow-navy">Создать</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">23</p>
          <p className="text-sm text-gray-600">Всего отправлено</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">18</p>
          <p className="text-sm text-gray-600">Доставлено</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600">5</p>
          <p className="text-sm text-gray-600">В процессе</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-red-600">0</p>
          <p className="text-sm text-gray-600">Ошибки</p>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>История отправлений</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Документ</TableHead>
              <TableHead>Получатель</TableHead>
              <TableHead>Дата отправки</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc: any) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">{doc.title}</TableCell>
                <TableCell>{doc.contractor}</TableCell>
                <TableCell>{doc.date}</TableCell>
                <TableCell>{doc.amount}</TableCell>
                <TableCell>
                  <Badge variant={doc.status === 'Отправлен' ? 'default' : 'secondary'}>{doc.status}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Icon name="Eye" size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="Send" size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
)

// Компонент страницы контрагентов
const ContractorsPage = ({ contractors }: any) => (
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-docflow-navy">Контрагенты</h1>
        <p className="text-gray-600 mt-1">Управление партнерами и клиентами</p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">
          <Icon name="Filter" size={20} className="mr-2" />
          Фильтры
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-docflow-navy hover:bg-docflow-navy/90">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Добавить контрагента
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Добавление контрагента</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Название организации</Label>
                  <Input placeholder="ООО Компания" />
                </div>
                <div className="space-y-2">
                  <Label>ИНН</Label>
                  <Input placeholder="1234567890" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>КПП</Label>
                  <Input placeholder="123456789" />
                </div>
                <div className="space-y-2">
                  <Label>ОГРН</Label>
                  <Input placeholder="1234567890123" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Юридический адрес</Label>
                <Input placeholder="г. Москва, ул. Примерная, д. 1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input placeholder="contact@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label>Телефон</Label>
                  <Input placeholder="+7 (000) 000-00-00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Контактное лицо</Label>
                <Input placeholder="Иванов Иван Иванович" />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline">Отмена</Button>
                <Button className="bg-docflow-navy">Добавить</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">85</p>
          <p className="text-sm text-gray-600">Всего контрагентов</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">78</p>
          <p className="text-sm text-gray-600">Активные</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600">5</p>
          <p className="text-sm text-gray-600">На проверке</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-red-600">2</p>
          <p className="text-sm text-gray-600">Заблокированы</p>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Список контрагентов</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex gap-4">
          <Input placeholder="Поиск по названию или ИНН..." className="max-w-sm" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Статус" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Активный</SelectItem>
              <SelectItem value="pending">На проверке</SelectItem>
              <SelectItem value="blocked">Заблокирован</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Организация</TableHead>
              <TableHead>ИНН</TableHead>
              <TableHead>Контакт</TableHead>
              <TableHead>Сделок</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contractors.map((contractor: any) => (
              <TableRow key={contractor.id}>
                <TableCell className="font-medium">{contractor.name}</TableCell>
                <TableCell>{contractor.inn}</TableCell>
                <TableCell>{contractor.contact}</TableCell>
                <TableCell>{contractor.deals}</TableCell>
                <TableCell>
                  <Badge variant={contractor.status === 'Активный' ? 'default' : 'secondary'}>
                    {contractor.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Icon name="Eye" size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="Edit" size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="Mail" size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
)

// Компонент настроек аккаунта
const SettingsPage = () => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-docflow-navy">Настройки аккаунта</h1>
      <p className="text-gray-600 mt-1">Управление профилем и настройками системы</p>
    </div>

    <Tabs defaultValue="profile" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="profile">Профиль</TabsTrigger>
        <TabsTrigger value="company">Компания</TabsTrigger>
        <TabsTrigger value="notifications">Уведомления</TabsTrigger>
        <TabsTrigger value="security">Безопасность</TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Личная информация</CardTitle>
            <CardDescription>Обновите данные вашего профиля</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-docflow-navy rounded-full flex items-center justify-center">
                <Icon name="User" size={32} className="text-white" />
              </div>
              <div>
                <Button variant="outline">Изменить фото</Button>
                <p className="text-sm text-gray-500 mt-1">JPG, PNG до 2MB</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Имя</Label>
                <Input defaultValue="Иван" />
              </div>
              <div className="space-y-2">
                <Label>Фамилия</Label>
                <Input defaultValue="Петров" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input defaultValue="petrov@company.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label>Телефон</Label>
              <Input defaultValue="+7 (999) 123-45-67" />
            </div>
            <div className="space-y-2">
              <Label>Должность</Label>
              <Input defaultValue="Менеджер по документообороту" />
            </div>
            <div className="flex justify-end pt-4">
              <Button className="bg-docflow-navy">Сохранить изменения</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="company" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Информация о компании</CardTitle>
            <CardDescription>Настройки вашей организации</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Название компании</Label>
              <Input defaultValue="DocFlow Solutions" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>ИНН</Label>
                <Input defaultValue="7701234567" />
              </div>
              <div className="space-y-2">
                <Label>КПП</Label>
                <Input defaultValue="770101001" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Юридический адрес</Label>
              <Textarea defaultValue="г. Москва, ул. Тверская, д. 1, офис 100" rows={2} />
            </div>
            <div className="space-y-2">
              <Label>Банковские реквизиты</Label>
              <Textarea placeholder="БИК, номер счета, название банка..." rows={3} />
            </div>
            <div className="flex justify-end pt-4">
              <Button className="bg-docflow-navy">Сохранить изменения</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Настройки уведомлений</CardTitle>
            <CardDescription>Выберите, когда получать уведомления</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email уведомления</Label>
                <p className="text-sm text-gray-500">Получать уведомления на электронную почту</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Новые документы</Label>
                <p className="text-sm text-gray-500">Уведомления о новых входящих документах</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Истечение сроков</Label>
                <p className="text-sm text-gray-500">Предупреждения об истечении срока документов</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Статус документов</Label>
                <p className="text-sm text-gray-500">Изменения статуса документов</p>
              </div>
              <Switch />
            </div>
            <div className="flex justify-end pt-4">
              <Button className="bg-docflow-navy">Сохранить настройки</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Безопасность</CardTitle>
            <CardDescription>Настройки безопасности аккаунта</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Текущий пароль</Label>
              <Input type="password" />
            </div>
            <div className="space-y-2">
              <Label>Новый пароль</Label>
              <Input type="password" />
            </div>
            <div className="space-y-2">
              <Label>Подтвердите пароль</Label>
              <Input type="password" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Двухфакторная аутентификация</Label>
                <p className="text-sm text-gray-500">Дополнительная защита аккаунта</p>
              </div>
              <Switch />
            </div>
            <Button className="bg-docflow-navy">Сохранить изменения</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
)

// Административная панель
const AdminPage = ({ users, documents, contractors }: any) => (
  <div className="max-w-6xl mx-auto">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-docflow-navy">Административная панель</h1>
      <p className="text-gray-600 mt-1">Управление системой и пользователями</p>
    </div>

    <Tabs defaultValue="users" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="users">Пользователи</TabsTrigger>
        <TabsTrigger value="documents">Документы</TabsTrigger>
        <TabsTrigger value="contractors">Контрагенты</TabsTrigger>
        <TabsTrigger value="system">Система</TabsTrigger>
      </TabsList>

      <TabsContent value="users" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Управление пользователями</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-docflow-navy">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Добавить пользователя
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Добавление пользователя</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>ФИО</Label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input placeholder="user@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label>Роль</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите роль" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">Пользователь</SelectItem>
                      <SelectItem value="manager">Менеджер</SelectItem>
                      <SelectItem value="admin">Администратор</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline">Отмена</Button>
                  <Button className="bg-docflow-navy">Добавить</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Пользователь</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Роль</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Последний вход</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user: any) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'Активный' ? 'default' : 'destructive'}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="documents" className="space-y-6">
        <h2 className="text-xl font-semibold">Управление документами</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-blue-600">{documents.length}</p>
              <p className="text-gray-600">Всего документов</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-green-600">156</p>
              <p className="text-gray-600">Обработано сегодня</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-red-600">12</p>
              <p className="text-gray-600">Ошибки системы</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Последние действия</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 border rounded">
                <Icon name="Upload" size={20} className="text-blue-600" />
                <div>
                  <p className="font-medium">Загружен документ "Договор №001"</p>
                  <p className="text-sm text-gray-500">Пользователь: М. Сидорова • 5 минут назад</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 border rounded">
                <Icon name="Check" size={20} className="text-green-600" />
                <div>
                  <p className="font-medium">Обработан документ "Счет-фактура №1205"</p>
                  <p className="text-sm text-gray-500">Пользователь: А. Козлов • 15 минут назад</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 border rounded">
                <Icon name="Send" size={20} className="text-yellow-600" />
                <div>
                  <p className="font-medium">Отправлен документ "Акт приемки-передачи"</p>
                  <p className="text-sm text-gray-500">Пользователь: И. Петров • 1 час назад</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="contractors" className="space-y-6">
        <h2 className="text-xl font-semibold">Управление контрагентами</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-blue-600">{contractors.length}</p>
              <p className="text-gray-600">Всего контрагентов</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-green-600">3</p>
              <p className="text-gray-600">Активных</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-yellow-600">1</p>
              <p className="text-gray-600">На проверке</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-red-600">0</p>
              <p className="text-gray-600">Заблокированы</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="system" className="space-y-6">
        <h2 className="text-xl font-semibold">Системные настройки</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Общие настройки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Автоматическое архивирование</Label>
                  <p className="text-sm text-gray-500">Архивировать документы старше 1 года</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Email уведомления</Label>
                  <p className="text-sm text-gray-500">Отправлять уведомления администраторам</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Логирование действий</Label>
                  <p className="text-sm text-gray-500">Сохранять журнал действий пользователей</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Резервное копирование</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Последнее резервное копирование</Label>
                <p className="text-sm text-gray-600">24 сентября 2025, 03:00</p>
              </div>
              <div className="space-y-2">
                <Label>Следующее резервное копирование</Label>
                <p className="text-sm text-gray-600">25 сентября 2025, 03:00</p>
              </div>
              <Button className="w-full bg-docflow-navy">
                <Icon name="Download" size={20} className="mr-2" />
                Создать резервную копию
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  </div>
)

const Index = () => {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState('user') // 'user' or 'admin'

  const stats = [
    { title: 'Входящие документы', value: 47, trend: '+12%', color: 'text-blue-600' },
    { title: 'Исходящие документы', value: 23, trend: '+8%', color: 'text-green-600' },
    { title: 'В обработке', value: 15, trend: '-3%', color: 'text-yellow-600' },
    { title: 'Контрагенты', value: 85, trend: '+5%', color: 'text-purple-600' },
  ]

  const recentDocuments = [
    { id: 1, title: 'Договор поставки №001', type: 'Входящий', date: '2025-09-24', status: 'Новый', contractor: 'ООО Партнер', amount: '150 000 ₽' },
    { id: 2, title: 'Счет-фактура №1205', type: 'Исходящий', date: '2025-09-24', status: 'Отправлен', contractor: 'ООО Клиент', amount: '75 000 ₽' },
    { id: 3, title: 'Акт приемки-передачи', type: 'Входящий', date: '2025-09-23', status: 'В работе', contractor: 'ИП Иванов', amount: '25 000 ₽' },
    { id: 4, title: 'Заявка на оплату', type: 'Исходящий', date: '2025-09-23', status: 'Согласован', contractor: 'ООО Поставщик', amount: '200 000 ₽' },
    { id: 5, title: 'Спецификация товаров', type: 'Входящий', date: '2025-09-22', status: 'Обработан', contractor: 'ООО ТехСнаб', amount: '85 000 ₽' },
  ]

  const contractors = [
    { id: 1, name: 'ООО "Партнер"', inn: '7701234567', contact: 'partner@example.com', status: 'Активный', deals: 15 },
    { id: 2, name: 'ООО "Клиент"', inn: '7702345678', contact: 'client@example.com', status: 'Активный', deals: 23 },
    { id: 3, name: 'ИП Иванов А.И.', inn: '771234567890', contact: 'ivanov@example.com', status: 'Активный', deals: 8 },
    { id: 4, name: 'ООО "Поставщик"', inn: '7703456789', contact: 'supply@example.com', status: 'На проверке', deals: 0 },
  ]

  const users = [
    { id: 1, name: 'Иван Петров', email: 'petrov@company.com', role: 'Администратор', status: 'Активный', lastLogin: '2025-09-24' },
    { id: 2, name: 'Мария Сидорова', email: 'sidorova@company.com', role: 'Менеджер', status: 'Активный', lastLogin: '2025-09-24' },
    { id: 3, name: 'Алексей Козлов', email: 'kozlov@company.com', role: 'Пользователь', status: 'Активный', lastLogin: '2025-09-23' },
    { id: 4, name: 'Елена Васильева', email: 'vasileva@company.com', role: 'Пользователь', status: 'Заблокирован', lastLogin: '2025-09-20' },
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
          onClick={() => {
            setIsAuthenticated(true)
            // Демо: admin@docflow.com - админ, остальные - пользователи
            const email = (document.getElementById('email') as HTMLInputElement)?.value
            setUserRole(email === 'admin@docflow.com' ? 'admin' : 'user')
          }}
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
          {userRole === 'admin' && (
            <>
              <Separator className="my-3" />
              <SidebarItem
                icon="Shield"
                label="Админ панель"
                active={currentPage === 'admin'}
                onClick={() => setCurrentPage('admin')}
              />
            </>
          )}
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
        {currentPage === 'dashboard' && (
          <DashboardPage stats={stats} recentDocuments={recentDocuments} />
        )}
        {currentPage === 'incoming' && (
          <IncomingDocumentsPage documents={recentDocuments.filter(d => d.type === 'Входящий')} />
        )}
        {currentPage === 'outgoing' && (
          <OutgoingDocumentsPage documents={recentDocuments.filter(d => d.type === 'Исходящий')} />
        )}
        {currentPage === 'contractors' && (
          <ContractorsPage contractors={contractors} />
        )}
        {currentPage === 'settings' && (
          <SettingsPage />
        )}
        {currentPage === 'admin' && userRole === 'admin' && (
          <AdminPage users={users} documents={recentDocuments} contractors={contractors} />
        )}
      </main>
    </div>
  )
}

export default Index